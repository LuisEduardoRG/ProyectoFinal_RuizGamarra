import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const CheckoutFormik = () => {
 
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: { nombre: "", email: "", contraseña: "", confirmar: "" },
    onSubmit: () => {},
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("este campo es obligatorio")
        .min(5, "minimo 5")
        .max(15, "maximo 15"),
      email: Yup.string()
        .email("el email debe tener @")
        .required("este campo es obligatorio"),
      contraseña: Yup.string()
        .required("este campo es obligatorio")
        .matches(
          /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
          "debe tener una mayuscula"
        ),
      confirmar: Yup.string()
        .required("este campo es obligatorio")
        .oneOf([Yup.ref("contraseña")], "las contraseñas no coinciden"),
    }),
    validateOnChange: false,
  });

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        margin: "50px",
        display: "flex",
        flexDirection: "column",
        width: "50%",
        gap: "20px",
      }}
    >
      <TextField
        variant="outlined"
        type="text"
        label="nombre"
        name="nombre"
        onChange={handleChange}
        error={errors.nombre ? true : false}
        helperText={errors.nombre}
      />
      {/*  */}
      <TextField
        variant="outlined"
        type="text"
        label="email"
        name="email"
        onChange={handleChange}
        error={errors.email ? true : false}
        helperText={errors.email}
      />
      <TextField
        variant="outlined"
        type="text"
        label="contraseña"
        name="contraseña"
        onChange={handleChange}
        error={errors.contraseña ? true : false}
        helperText={errors.contraseña}
      />
      <TextField
        variant="outlined"
        type="text"
        label="confirmar"
        onChange={handleChange}
        name="confirmar"
        error={errors.confirmar ? true : false}
        helperText={errors.confirmar}
      />
      {values.nombre === "delivery" && (
        <TextField
          variant="outlined"
          type="text"
          label="Direccion"
          onChange={handleChange}
          name="confirmar"
        />
      )}
      <Button type="submit" variant="contained">
        Registrar
      </Button>
    </form>
  );
};

export default CheckoutFormik;
