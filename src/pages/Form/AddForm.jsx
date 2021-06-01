import { Button, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import api from "../../api";
import { DatePicker, LineInput } from "../../components/Input/InputField";

const dictionary = {
  FORM_TD: "TD Form",
  FORM_TJA: "TJA Form",
  date: "Date",
  name: "Name",
  surname: "Surname",
  title: "Title",
  student_name: "Student Name",
  student_number: "Student Number",
  student_program: "Student Program",
  department: "Department",
  student_surname: "Student Surname"
};

export default function AddForm() {
  const { id } = useParams();
  const history = useHistory();
  const styles = useStyles();
  const { state } = useLocation();
  console.log(state);
  const [name, setName] = useState("");
  const [fields, setFields] = useState([]);
  const [input, setInput] = useState([]);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    console.log(input);
    setDisabled(!input.every((field) => field.value !== ""));
  }, [input]);

  useEffect(() => {
    api.getForm(id).then((data) => {
      setName(data.name.replace(/\w+/gi, (m) => dictionary[m] || m));
      const fieldArr = data.fields.map((field) => ({
        ...field,
        name: field.name.replace(/\w+/gi, (m) => dictionary[m] || m)
      }));
      setFields(fieldArr);
      const arr = [];
      for (let i = 0; i < data.fields.length; i += 1) {
        if (data.fields[i].type === 9999 && state) {
          arr.push({ id: Number(id) + 16, value: state.student_id });
        } else {
          arr.push({ id: data.fields[i].id, value: "" });
        }
      }
      setInput(arr);
    });
  }, [id, state]);

  const onChange = (ids, text) => {
    setInput((prevInput) => {
      const obj = prevInput.find((s) => s.id === ids);
      obj.value = text;
      return [...prevInput];
    });
  };

  const handleClick = () => {
    api
      .postForm(id, input)
      .then((res) => {
        if (res.statusText === "Created") {
          history.push("/proposals");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.container}>
      <h1>{name}</h1>
      <div className={styles.formInputs}>
        {fields.map((item) => (
          <div key={item.id}>
            {item.type === 0 && (
              <LineInput label={item.name} onChange={(text) => onChange(item.id, text)} />
            )}
            {item.type === 3 && (
              <DatePicker label={item.name} onChange={(text) => onChange(item.id, text)} />
            )}
          </div>
        ))}
      </div>
      <div className={styles.buttons}>
        <Button
          disabled={disabled}
          variant="contained"
          color="secondary"
          onClick={() => handleClick()}>
          Send
        </Button>
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
  },
  buttons: {
    display: "flex",
    alignSelf: "flex-end",
    paddingRight: 16
  }
}));
