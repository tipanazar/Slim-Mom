import { useForm } from "react-hook-form";
const CalculatorСalorieForm = ({
  title = "Здесь может быть ваша реклама!",
  onChange,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      bloodType: "1",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>{title}</h2>
        <div>
          <input
            placeholder={"Рост *"}
            {...register("height", {
              min: { value: 100, message: "Минимальный рост 100см!" },
              max: { value: 220, message: "Максимальный рост 220см!" },
              required: "Введите свой рост! Поле обязательное!",
            })}
          />
          {errors?.height && <p>{errors?.height?.message}</p>}
        </div>
        <div>
          <input
            placeholder={"Возвраст *"}
            {...register("age", {
              min: { value: 18, message: "Минимальный возвраст 18 лет!" },
              max: { value: 99, message: "Максимальный возвраст 99 лет!" },
              required: "Введите свой возвраст! Поле обязательное!",
            })}
          />
          {errors?.age && <p>{errors?.age?.message}</p>}
        </div>
        <div>
          <input
            placeholder={"Текущий вес *"}
            {...register("currentWeight", {
              min: { value: 40, message: "Минимальный текущий вес 40кг!" },
              max: { value: 200, message: "Максимальный текущий вес 200кг!" },
              required: "Введите свой вес! Поле обязательное!",
            })}
          />
          {errors?.currentWeight && <p>{errors?.currentWeight?.message}</p>}
        </div>
        <div>
          <input
            placeholder={"Желаемый вес *"}
            {...register("desiredWeight", {
              min: { value: 40, message: "Минимальный желаемый вес 40кг!" },
              max: { value: 200, message: "Максимальный желаемый вес 200кг!" },
              required: "Введите желаемый вес! Поле обязательное!",
            })}
          />
          {errors?.desiredWeight && <p>{errors?.desiredWeight?.message}</p>}
        </div>
        <div>
          <p>Группа крови *</p>
          <label>
            <input
              type="radio"
              value={"1"}
              {...register("bloodType", {
                required: "Выберите группу крови! Это обязательно!",
              })}
            />
            1
          </label>
          <label>
            <input
              type="radio"
              value={"2"}
              {...register("bloodType", {
                required: "Выберите группу крови! Это обязательно!",
              })}
            />
            2
          </label>
          <label>
            <input
              type="radio"
              value={"3"}
              {...register("bloodType", {
                required: "Выберите группу крови! Это обязательно!",
              })}
            />
            3
          </label>
          <label>
            <input
              type="radio"
              value={"4"}
              {...register("bloodType", {
                required: "Выберите группу крови! Это обязательно!",
              })}
            />
            4
          </label>
          {errors?.bloodType && <p>{errors?.bloodType?.message}</p>}
        </div>
        <button type="submit" disabled={!isValid}>
          Похудеть!
        </button>
      </form>
    </div>
  );
};

export default CalculatorСalorieForm;
