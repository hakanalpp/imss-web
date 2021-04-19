import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { CheckBox, LineInput } from "../../components/Input/InputField";

const k = [
  { id: "1", label: "Kullanıcı adı", type: "TextInput" },
  { id: "3", label: "Test Input", type: "TextInput" },
  { id: "2", label: "CheckBox", type: "CheckBox" }
];

export default function AddForm() {
  const styles = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [input, setInput] = useState({});

  const onChange = (id, text) => {
    setInput((prevInput) => {
      return { ...prevInput, [id]: text };
    });
  };
  return (
    <div className={styles.container}>
      <h1>Form Title</h1>
      <div className={styles.formInputs}>
        {k.map((item) => (
          <div key={item.id}>
            {item.type === "TextInput" && (
              <LineInput
                key={item.id}
                label={item.label}
                onChange={(text) => onChange(item.id, text)}
              />
            )}
            {item.type === "CheckBox" && (
              <CheckBox
                key={item.id}
                label={item.label}
                onChange={(text) => onChange(item.id, text)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  formInputs: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }
}));
