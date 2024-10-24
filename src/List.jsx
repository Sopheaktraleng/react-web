function List(){
    const fruit = [
        {id:1, name:"apple", colgories:45},
        {id:2, name: "pineple", colgories:90},
        {id:3, name: "grab",colgories:112},
        {id:4, name: "mango",colgories:10}
    ];
    const listItems = fruit.map(fruit => <li key={fruit.id}>{fruit.name}:&nbsp;<b>{fruit.colgories}</b></li>)
    return (
        <ol>{listItems}</ol>
    );
}
export default List