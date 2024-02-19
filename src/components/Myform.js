import { useForm } from "react-hook-form";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function MyForm() {
	const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => { console.log(data) };
  const notify = () => toast("Wow so easy!");


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        İsim:
        <input
					type="text"
					name="isim"
					{...register("isim", { required: "İsim boş bırakılamaz" })}
				/>
      </label>
			{errors.isim && <p>{errors.isim.message}</p>}
      <br />

      <label>
        Soyisim:
        <input
					type="text"
					name="soyisim"
					{...register("soyisim", { required: "Soyisim boş bırakılamaz" })}
				/>
      </label>
			{errors.soyisim && <p>{errors.soyisim.message}</p>}
      <br />

			<label>
				Mesajınız:
				<textarea
					rows="3"
          id="mesaj"
          name="mesaj"
          {...register("mesaj", {
            required: "Mesaj boş bırakılamaz",
            minLength: {
              value: 10,
              message: "Mesaj en az 10 karakter içermelidir",
            },
          })}
        ></textarea>
			</label>
			{errors.mesaj && <p>{errors.mesaj.message}</p>}

      <br />
      <button onClick={notify} type="submit" disabled={!isValid}>Gönder</button>
      <ToastContainer />

    </form>
  );
}
export default MyForm;
