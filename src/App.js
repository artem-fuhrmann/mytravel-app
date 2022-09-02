import Card from './Card'
import data from './data'




export default function App() {
    const cards = data.map(item => {
        return (
            <Card 
                    id={item.id}
                    imageUrl={item.imageUrl}
            />
        )
    });

    return (
        <div>
            {cards}
        </div>
    )
}
