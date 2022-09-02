import Card from './Card'
import data from './data'
import Header from './Header'
import './App.css'



export default function App() {
    const cards = data.map(item => {
        return (
            <Card 
                    key={item.id}
                    {...item}
            />
        )
    });

    return (
        <div className="body">
            <Header />
            {cards}
        </div>
    )
}
