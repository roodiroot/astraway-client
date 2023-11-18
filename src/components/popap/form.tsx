import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

import Button from "../ui/button";
import Input from "./input";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    reset,
    formState: { errors },
  } = useForm<IFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: null,
    },
  });

  const onSubmit: SubmitHandler<IFormValues> = async (data: any) => {
    setDisabled(true);
    let string = [];
    for (let block in data) {
      if (data[block]) {
        string.push(`<b>${block}:</b> <i>${String(data[block])}</i>`);
      }
    }
    const dataString = string.join().replace(/,/g, "%0A");
    const text = `<b>Форма обратной связи Astraway:</b>%0A%0A${dataString}`;

    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/client-orders?text=${text}&chatid=${process.env.REACT_APP_CHATID}`
      )
      .then(() => {
        reset();
        onClosePopap();
        //@ts-ignore
        window.ym(95603399, "reachGoal", "submit_form");
      })
      .catch(() => {
        console.log("Ошибка отправки");
      })
      .finally(() => {
        setDisabled(false);
      });
  };
  return (
    <>
      <div className='space-y-5'>
        <Input
          placeholder='Введите имя'
          title='Имя'
          label='name'
          register={register}
          required
          error={errors.name}
        />
        <Input
          placeholder='Введите email'
          title='Email'
          type='email'
          label='email'
          register={register}
          error={errors.name}
        />
        <Input
          placeholder='Введите телефон'
          title='Телефон'
          type='tel'
          label='phone'
          register={register}
          required
          error={errors.name}
        />
      </div>
      <div className='w-full flex flex-col gap-2'>
        <Button
          disabled={disabled}
          onClick={handleSubmit(onSubmit)}
          className='w-[200px]'
        >
          Отправить
        </Button>
        <div className='text-xs'>
          Обращаем Ваше внимание на то что отправляя данные вы соглашаетесь с
          политикой по использованию{" "}
          <Link to='/confidentiality' className='underline'>
            персональных данных
          </Link>
        </div>
      </div>
    </>
  );
};

export default Form;
