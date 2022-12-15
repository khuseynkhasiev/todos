import { Component } from 'react';
import TodoList from './TodoList.js'

const data1 = new Date(2021, 7, 19, 14, 5);
const data2 = new Date(2021, 7, 19, 15, 23);

const initialData = [
  {
    title: 'Изучить React',
    desc: 'Да поскорее',
    image: '',
    done: false,
    createAt: data1.toLocaleString(),
    key: data1.getTime()
  },
  {
    title: 'Написать первое React-приложение',
    desc: 'Список запланированнхы дел',
    image: '',
    done: false,
    createAt: data2.toLocaleString(),
    key: data2.getTime()
  }
]

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: initialData}; 
    this.setDone = this.setDone.bind(this);
    this.delete = this.delete.bind(this);
  }
  delete(key) {
    const newData = this.state.data.filter((current) => current.key !== key);
    this.setState((state) => ({data: newData}))
  }
  setDone(key){
    console.log(key);
    const deed = this.state.data.find((current) => current.key === key);
    if (deed) {
      deed.done = true;
      this.setState((state) => ({}))
    }
  }

  render() {
    return (
      <div>
        <nav className='navbar is-light'>
          <div className='navbar-brand'>
            <span className='navbar-item is-uppercase'>
              Todos
            </span>
          </div>
        </nav>
        <main className='content px-6 mt-6'>
          <TodoList list={this.state.data} setDone={this.setDone} delete={this.delete}/>
        </main>
      </div>
    )
  }
}
