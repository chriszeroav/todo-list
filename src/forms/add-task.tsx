import { ChangeEvent, FC, FormEvent, useEffect, useRef, useState } from "react";
import { useAppStore } from "../store/app";

interface AddTaskProps {}

export const AddTask: FC<AddTaskProps> = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string>("");
  const createTask = useAppStore((state) => state.createTask);
  const isFirstInput = useRef<boolean>(true);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (error || isFirstInput.current) return;
    console.log("Creando");
    createTask(value);
    isFirstInput.current = true;
    setValue("");
  };

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = value === "";
      return;
    }

    if (value === "") {
      setError("La tarea no puede estar vacia");
      return;
    }

    setError("");
  }, [value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="relative">
        <input
          value={value}
          onChange={handleChange}
          className="outline-none rounded-md h-10 max-w-sm w-full px-4 border  border-neutral-500 text-neutral-100 bg-transparent placeholder:text-neutral-500 focus:border-orange-300"
          type="text"
          placeholder="Nueva tarea..."
        />
        {error && (
          <p className="text-xs text-red-400 absolute -bottom-5 left-0">
            {error}
          </p>
        )}
      </div>
      <button className="bg-orange-400 px-8 py-2 rounded-md">Guardar</button>
    </form>
  );
};

export default AddTask;
