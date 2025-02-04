import { useRef } from "react";
import Button from "./components/UI/Button";
import { Card } from "./components/UI/Card";
import Container from "./components/UI/Container";
import { IconButton } from "./components/UI/IconButton";
import Input from "./components/UI/Input";
import { List } from "./components/UI/List";
import Form, { FormHandle } from "./components/UI/Form";

function HeartIcon() {
  return <span>❤️</span>;
}

const users = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
];

const hobbies = ["Sports", "Reading", "Cooking"];

function App() {
  const input = useRef<HTMLInputElement>(null);

  const customForm = useRef<FormHandle>(null);

  const handleSave = (data: unknown) => {
    /* Type Casting */
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    /*  */
    customForm.current?.clear();
  };

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input id="name" label="Your name" type="text" ref={input} />
        <Input id="age" label="Your age" type="number" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
      <p>
        <Button>A Button</Button>
      </p>
      <p>
        <Button href="https://google.com">A Link</Button>
      </p>
      <Container as={Button} type="button">
        Click me
      </Container>
      <Card
        title="My Card"
        actions={
          <button onClick={() => console.log("Button clicked!")}>
            Click Me!
          </button>
        }
      >
        <p>Some content</p>
      </Card>
      <IconButton
        icon={HeartIcon}
        onClick={() => console.log("Button clicked!")}
      >
        Like
      </IconButton>
      <section>
        <h2>Users</h2>
        <List
          items={users}
          renderItem={(user) => <li key={user.id}>{user.name}</li>}
        />
      </section>
      <section>
        <h2>Hobbies</h2>
        <List
          items={hobbies}
          renderItem={(hobby) => <li key={hobby}>{hobby}</li>}
        />
      </section>
    </main>
  );
}

export default App;
