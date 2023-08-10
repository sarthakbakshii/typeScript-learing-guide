1) type for states
 const [todo , setTodo] = useState<string>("");
   
2) type when a state send as props
Parent File =>
     const [todo , setTodo] = useState<string>("");
     <InputField todo={todo} setTodo={setTodo} /> 
Children File =>
    interface Props{
        todo : string;
        setTodo : React.Dispatch<React.SetStateAction<string>>
    }
    const InputField = ({ todo , setTodo } : Props ) => {
      return <div> content </div>)
    }

3) defining a componets with props
    const Child = ({todo , setTodo} : { todo : string ; setTodo : React.Dispatch<React.SetStateAction<string>> } ) =>{
        return <div></div>
    }
    const Child = ({todo , setTodo} : Props) =>{
        return <div></div>
    }
    const Child : React.FC<Props> = ({todo , setTodo}) =>{
        return <div></div>
    }
