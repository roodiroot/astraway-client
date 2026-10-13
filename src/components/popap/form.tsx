import { useForm, SubmitHandler } from "react-hook-form";

import Button from "../ui/button";
import Input from "./input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../../schema";
import InputPhone from "./input-phone";
import { sendFeedback } from "../../api/feedback";

export type IFormValues = {
  name: string;
  email: string;
  phone: number | null;
};

const Form: React.FC<{ onClosePopap: () => void }> = ({ onClosePopap }) => {
  const [disabled, setDisabled] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
    data: z.infer<typeof formSchema>,
  ) => {
    // Валидация данных перед отправкой
    const validationResult = formSchema.safeParse(data);

    if (!validationResult.success) {
      return; // Прерываем отправку при наличии ошибок
    }

    // Если валидация успешна
    setDisabled(true);
    const { name, email, phone } = validationResult.data;

    const text = [
      "Новая заявка с Astraway.ru",
      "",
      `Имя: ${name}`,
      `Телефон: ${phone}`,
      `Email: ${email || "не указан"}`,
    ].join("\n");

    const html = `
      <div>
        <h2>Новая заявка с Astraway.ru</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "не указан"}</p>
      </div>
    `;

    try {
      const res = await sendFeedback({
        to: process.env.REACT_APP_EMAIL_SEND || "",
        subject: "Обратная связь c Astraway.ru",
        text,
        html,
      });

      if (res.ok) {
        reset();
        onClosePopap();
        //@ts-ignore
        window.ym(95603399, "reachGoal", "submit_form");
      } else {
        console.log("Ошибка отправки");
      }
    } catch (error) {
      console.log("Ошибка отправки");
    }
    setDisabled(false);
  };
  return (
    <>
      <div className="space-y-5">
        <Input
          required
          placeholder="Введите имя"
          title="Имя"
          label="name"
          register={register}
          error={errors.name?.message}
        />
        <Input
          placeholder="Введите email"
          title="Email"
          type="email"
          label="email"
          register={register}
          error={errors.email?.message}
        />
        <InputPhone title="Телефон" label="phone" control={control} error={errors.phone?.message} />
      </div>
      <div className="w-full flex flex-col gap-2">
        <Button disabled={disabled} onClick={handleSubmit(onSubmit)} className="w-[200px]">
          Отправить
        </Button>
        <div className="text-xs">
          Обращаем Ваше внимание на то что отправляя данные вы соглашаетесь с политикой по
          использованию{" "}
          <Link to="/confidentiality" className="underline">
            персональных данных
          </Link>
        </div>
      </div>
    </>
  );
};

export default Form;
