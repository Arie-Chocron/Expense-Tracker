import ExpenseItem from "./ExpenseItem";
import "./ExpenseRender.css";
import Card from "../UI/Card";

function ExpenseRender(props) {
  const expenses = props.expenses;

  return (
    <Card className="expenses">
      {expenses.map((obj) => {
        return (
          <div key={obj.id}>
            <ExpenseItem
              title={obj.title}
              amount={obj.amount}
              date={obj.date}
            ></ExpenseItem>
          </div>
        );
      })}
    </Card>
  );
}

export default ExpenseRender;
