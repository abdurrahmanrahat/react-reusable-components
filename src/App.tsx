import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from "./components/ReuseableForm";
import Container from "./components/ui/Container";

function App() {
  // const [modal, setModal] = useState(false);

  // const handleModalClose = () => {
  //   setModal((prev) => !prev);
  // };

  // // handle submit function
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("clicked");

  //   if (true) {
  //     handleModalClose();
  //   }
  // };

  // react hook form
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TText>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const TextSchema = z.object({
    name: z.string(),
    email: z.string().email(),
  });

  type TText = z.infer<typeof TextSchema>;

  return (
    <Container>
      {/* <div>
          <Button onClick={() => setModal((prev) => !prev)}>Open Modal</Button>
          <Modal isOpen={modal} onClose={handleModalClose}>

          <Modal.Header>
              <h3>Modal Title</h3>
              <Modal.CloseButton></Modal.CloseButton>
            </Modal.Header>

            <form onSubmit={handleSubmit}>
              <input type="text" />
              <button type="submit">Submit</button>
            </form>
          </Modal>
        </div> */}

      {/* <NormalForm></NormalForm> */}

      <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
        <FormSection>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="name">
              Name
            </label>
            <input type="text" id="name" {...register("name")} />
            {errors.name && (
              <span className="text-xs text-[#EC5990]">
                {errors.name.message}
              </span>
            )}
          </div>

          <Input
            type="email"
            register={register("email")}
            errors={errors}
            label="Email"
          ></Input>
        </FormSection>
        <FormSubmit></FormSubmit>
      </Form>
    </Container>
  );
}

export default App;
