const Header=(props)=>{
  console.log(props)
  const headername=props.course.name
  return <h1>{headername}</h1>
}
const Content=(props)=>{
  console.log(props)
  const part1=props.course.parts[0].name
  const exercise1=props.course.parts[0].exercises
  const part2=props.course.parts[1].name
  const exercise2=props.course.parts[1].exercises
  const part3=props.course.parts[2].name
  const exercise3=props.course.parts[2].exercises
  return(
    <div>
      <Part name={part1} exercises={exercise1}/>
      <Part name={part2} exercises={exercise2}/>
      <Part name={part3} exercises={exercise3}/>
    </div>
  )
}

const Part=(props)=>{
  console.log(props)
  return(
    <div>
    <p>{props.name} {props.exercises}</p>
    </div>
  )
}
const Total=(props)=>{
  console.log(props)
  const exercise1=props.course.parts[0].exercises
  const exercise2=props.course.parts[1].exercises
  const exercise3=props.course.parts[2].exercises
  return <p>Number of exercises {exercise1+exercise2+exercise3}</p>
  }
const App = () => {
  const course = 
  {
    name:'Half Stack application development',
     parts : [
            {
              name:'Fundamentals of React',
              exercises : 10
            },
            {
              name: 'Using props to pass data',
              exercises : 7
            },
           {
              name :'State of a component',
              exercises : 14
            }
    ]
  
  }

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
      </div>
  )

  
}

export default App