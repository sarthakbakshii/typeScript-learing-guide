1) type for states

 
   `const [todo , setTodo] = useState<string>("");`
   

2) type when a state send as props

   ` Parent File 
   const [todo , setTodo] = useState<string>("");

    <InputField todo={todo} setTodo={setTodo} /> `
