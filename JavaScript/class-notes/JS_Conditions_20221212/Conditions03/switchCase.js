let item = 'Paper';

switch(item){
    case 'PeN':
    case 'PEN':
    case 'Pen':
    case 'pen':
        console.log("Pen is $3. ");
        break;
    case 'paper':
        console.log("Paper is $0.10. ");
        break;
    case 'book':
        console.log("Book is $10. ");
        break;
    default:
        console.log("Item not found");
}