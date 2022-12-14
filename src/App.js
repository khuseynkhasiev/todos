import { Component } from 'react';

const data1 = new Date(2021, 7, 19, 14, 5);
const data2 = new Date(2021, 7, 19, 15, 23);

const initialData = [
  {
    title: 'Изучить React',
    desc: 'Да поскорее',
    image: '',
    done: true,
    createAt: data1.toLocaleString(),
    key: data1.getTime()
  },
  {
    title: 'Написать первое React-приложение',
    desc: 'Список запланированнхы дел',
    image: '',
    done: true,
    createAt: data2.toLocaleString(),
    key: data2.getTime()
  }
]

export default class App extends Component {
  constructor(props) {
    super(props);
    this.data = initialData;
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
          <h1>Todos</h1>
        </main>
      </div>
    )
  }
}