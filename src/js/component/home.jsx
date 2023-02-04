import React, { useState, useEffect } from "react";
import InputElem  from "./InputElem.js";
import ButtonElem  from "./ButtonElem.js";
import {TodoList}  from "./TodoList.js";
import Contador from "./Contador.js";
import {numero_id} from "./TodoList.js";

//create your first component
const Home = (props) => {

	const [counter, setCounter] = useState(0);
	const [taskValue, setTaskValue] = useState("");
	const [tasks, setTasks] = useState([]);		

	const addTask = async (event) => {
		//event.preventDefault();
		const auxTasks = [...tasks]
		taskValue.length===0 ?
		alert("Debe escribir contenido en la tarea primero")
		:
		auxTasks.push({
		label: taskValue,
		done: false
		})
		console.log({ auxTasks })
		setTasks(auxTasks)
		setCounter(counter + 1)
		setTaskValue("")
		console.log(auxTasks[0])
		const resp = await fetch('https://assets.breatheco.de/apis/fake/todos/user/maillan1', {
		  method: "PUT",
		  body:
			JSON.stringify(auxTasks),
		  headers: {
			"Content-Type": "application/json"
		  },
		  })
	  const data = await resp.json();
	  console.log(data)
	}

	const myPlaceholder = (tasks.length===0) ? "Sin tareas, presione 'Enter' o clicke en 'Añadir tarea'" : "Escriba aqui su nueva tarea";

	const contador1 = tasks.length+" item left";
	
	const removeTask = async (id) => {
		console.log(<numero_id/>)
		const auxTasks = [...tasks]
		console.log(id)
		const result = auxTasks.filter((tasks,index) => 
		index !== id );
		
		setTasks(result);
		console.log({ result })
		const resp = await fetch('https://assets.breatheco.de/apis/fake/todos/user/maillan1', {
		  method: "PUT",
		  body:
			JSON.stringify(result),
		  headers: {
			"Content-Type": "application/json"
		  },
		  })
	  const data = await resp.json();
	  console.log(data)
	}
	/*const removeallTasks = async ()=>{
		const result=[{"label":null,"done":true}];
		setTasks(result)
		const resp = await fetch('https://assets.breatheco.de/apis/fake/todos/user/maillan1', {
		  method: "PUT",
		  body:
			JSON.stringify(result),
		  headers: {
			"Content-Type": "application/json"
		  },
		  })
	  const data = await resp.json();
	  console.log(data)
	}*/
	const handleSubmit = event => {
		event.preventDefault();
	
		console.log('form submitted ✅');
	  };

	useEffect(()=>{
		
	const getTask = async () =>{
		const resp = await fetch('https://assets.breatheco.de/apis/fake/todos/user/maillan1', {
				method: "GET",
			})
		const data = await resp.json();
		setTasks(data)
	}
	getTask();
	console.log(tasks)
	
	/*fetch('https://assets.breatheco.de/apis/fake/todos/user/maillan1', {
			method: "GET",
		})
    .then(resp => {
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        console.log(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {
        //error handling
        console.log(error);
    });*/
	},[])

	return (
		<div className ="text-center">
			<div className="container bg-light tamaño">
				<h1 className="textouno ">todos</h1>
				<ButtonElem  onClick={addTask} value="Añadir tarea" />
				<div className="xtrashade" style={{backgroundColor:"white",width:"400px",height:"40px",margin:"auto",padding:"8px",boxShadow:"0px 0px 10px grey"}}>
				<form onSubmit={addTask}>
					<InputElem placeholder={myPlaceholder} value={taskValue} onChange={(e) => setTaskValue(e.target.value)} />
				</form>
				</div >
					<div style={{backgroundColor:"white",width:"400px",height:"35px",margin:"auto",border:"1px solid black",borderTopStyle:"none",borderLeftStyle:"none"}}>
						<TodoList tasks={tasks} funcion={removeTask} numero={contador1} />
					</div>
			</div>
			
		</div>
		)

};


export default Home;
