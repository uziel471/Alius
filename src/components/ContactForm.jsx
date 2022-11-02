import { useForm } from "react-hook-form";

function ContactForm(){

  const { register, formState: { errors } } = useForm();
  return (
    <div className="w-full mx-auto flex flex-col justify-center">
      <form className="max-w-[500px] w-full mx-auto p-8 px-8" action="https://formsubmit.co/uziel471@gmail.com" method="POST">
        <h2 className="text-3xl dark:text-black text-start">Contacto</h2>
        <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-[115px] mb-[20px]"></div>
        <div className="flex flex-col py-2">
          <label>
            Nombre *
          </label>
          <input name="nombre" type="text" className="rounded-lg mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none"
            {...register('nombre',{
              required: true
            })}
          />
          {errors.nombre && <span className="text-red-500">Este campo es requerido</span>}
        </div>
        <div className="flex flex-col py-2">
          <label>
            Correo *
          </label>
          <input name="correo" type="email" className="rounded-lg mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none"
            {...register('correo',{
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
              }
            )}
          />
          {errors.correo?.type === 'required' && <span className="text-red-500">Este campo es requerido</span>}
          {errors.correo?.type === 'pattern' && <span className="text-red-500">Formato de correo incorrecto</span>}
        </div>
        <div className="flex flex-col py-2">
          <label>
            Telefono *
          </label>
          <input name="telefono" type="number" className="rounded-lg mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none"
            {...register('telefono',{
                required: true,
                minLength: 10,
                maxLength: 10
              }
            )}
          />
          {errors.telefono?.type === 'required' && <span className="text-red-500">Este campo es requerido</span>}
          {['minLength', 'maxLength'].includes(errors.telefono?.type) && <span className="text-red-500">El telefono debe tener 10 digitos</span>}
        </div>
        <div className="flex flex-col py-2">
          <label>
            Mensaje *
          </label>
          <textarea name="mensaje" type="text" className="rounded-lg mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none"
            {...register('mensaje',{
              required: true
              }
            )}
          />
          {errors.mensaje && <span className="text-red-500">Este campo es requerido</span>}
        </div>
        <input type="hidden" name="_next" value="http://localhost:3000/"/>
        <input type="hidden" name="_captcha" value="false" />
        <div className="flex justify-end text-white">
          <button type="submit" className="w-[70px] my-5 py-2 bg-[#0b233f] shadow-lg shadow-[#0b233f/20] hover:shadow-[#0b233f/10] font-semibold rounded-lg">Enviar</button>
        </div>
      </form>
    </div>
  )
}
export default ContactForm;