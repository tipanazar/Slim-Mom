import { useForm } from "react-hook-form";

import style from "./calculatorСalorieForm.module.scss";

const CalculatorСalorieForm = ({
  title = "Тут може бути ваша реклама, але ніхто не спонсує :(",
  onChange,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      bloodType: "1",
    },
  });

  const watchCurrentWeight = watch("currentWeight");

  const onSubmit = (data) => {
    onChange(data);
    reset();
  };

  return (
    <div className={style.form_wrapper}>
      <h2 className={style.form_title}>{title}</h2>
      <form className={style.form_form} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.row_wrapper}>
          <div className={style.tablet_input_wrapper}>
            <div className={style.inputs_wrapper}>
              <input
                className={style.input}
                placeholder={"Зріст *"}
                {...register("height", {
                  min: { value: 100, message: "Мінімальний зріст 100см!" },
                  max: { value: 220, message: "Максимальний зріст 220см!" },
                  required: "Введіть свій зріст! Поле обов'язкове!",
                  pattern: {
                    value: /[0-9]{3}/,
                    message: "Некоректні символи!",
                  },
                })}
              />
              {errors?.height && (
                <p className={style.error}>{errors?.height?.message}</p>
              )}
            </div>
            <div className={style.inputs_wrapper}>
              <input
                className={style.input}
                placeholder={"Вік *"}
                {...register("age", {
                  min: { value: 18, message: "Мінімальний вік 18 років!" },
                  max: { value: 99, message: "Максимальний вік 99 років!" },
                  required: "Введіть свій вік! Поле обов'язкове",
                  pattern: {
                    value: /[0-9]{2}/,
                    message: "Некоректні символи!",
                  },
                })}
              />
              {errors?.age && (
                <p className={style.error}>{errors?.age?.message}</p>
              )}
            </div>
            <div className={style.inputs_wrapper}>
              <input
                className={style.input}
                placeholder={"Поточна вага *"}
                {...register("currentWeight", {
                  min: { value: 40, message: "Мінімальна вага 40кг!" },
                  max: { value: 200, message: "Максимальна вага 200кг!" },
                  required: "Введіть свою вагу! Поле обов'язкове!",
                  pattern: {
                    value: /[0-9]/,
                    message: "Некоректні символи!",
                  },
                })}
              />
              {errors?.currentWeight && (
                <p className={style.error}>{errors?.currentWeight?.message}</p>
              )}
            </div>
          </div>
          <div className={style.tablet_input_wrapper}>
            <div className={style.inputs_wrapper}>
              <input
                className={style.input}
                placeholder={"Бажана вага *"}
                {...register("desiredWeight", {
                  min: { value: 40, message: "Мінімальна бажана вага 40кг!" },
                  max: {
                    value: 200,
                    message: "Максимальна бажана вага 200кг!",
                  },
                  required: "Введіть свою бажану вагу! Поле обов'язкове!",
                  pattern: {
                    value: /[0-9]/,
                    message: "Некоректні символи!",
                  },
                  validate: (value) =>
                    Number(value) <= Number(watchCurrentWeight) ||
                    "Бажана вага не може бути більшою за поточну!",
                })}
              />
              {errors?.desiredWeight && (
                <p className={style.error}>{errors?.desiredWeight?.message}</p>
              )}
            </div>
            <div>
              <p className={style.bloodType}>Група крові *</p>
              <div className={style.radioBtns_wrapper}>
                <div className={style.oneRadioBtn_wrapper}>
                  <label className={style.customRadioBtn}>
                    <input
                      type="radio"
                      value={"1"}
                      {...register("bloodType", {
                        required: "Оберіть свою групу крові! Це обов'язково!",
                      })}
                    />
                    <span className={style.checkmark}></span>
                  </label>
                  <p className={style.radioBtnText}>1</p>
                </div>
                <div className={style.oneRadioBtn_wrapper}>
                  <label className={style.customRadioBtn}>
                    <input
                      type="radio"
                      value={"2"}
                      {...register("bloodType", {
                        required: "Оберіть свою групу крові! Це обов'язково!",
                      })}
                    />
                    <span className={style.checkmark}></span>
                  </label>
                  <p className={style.radioBtnText}>2</p>
                </div>
                <div className={style.oneRadioBtn_wrapper}>
                  <label className={style.customRadioBtn}>
                    <input
                      type="radio"
                      value={"3"}
                      {...register("bloodType", {
                        required: "Оберіть свою групу крові! Це обов'язково!!",
                      })}
                    />
                    <span className={style.checkmark}></span>
                  </label>
                  <p className={style.radioBtnText}>3</p>
                </div>
                <div className={style.oneRadioBtn_wrapper}>
                  <label className={style.customRadioBtn}>
                    <input
                      type="radio"
                      value={"4"}
                      {...register("bloodType", {
                        required: "Оберіть свою групу крові! Це обов'язково!",
                      })}
                    />
                    <span className={style.checkmark}></span>
                  </label>
                  <p className={style.radioBtnText}>4</p>
                </div>
                {errors?.bloodType && (
                  <p className={style.error}>{errors?.bloodType?.message}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={style.btn_wrapper}>
          <button className={style.button} type="submit" disabled={!isValid}>
            Схуднути!
          </button>
        </div>
      </form>
    </div>
  );
};

export default CalculatorСalorieForm;
