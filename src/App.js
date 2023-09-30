import React, { useState, useEffect } from "react";
import ExpensesFilter from "./component/GraphicsList/ExpensesFilter";
import ExpenseRender from "./component/Expenses/ExpenseRender";
import NewExpense from "./component/NewExpense/NewExpense";

function App() {
  const [selectedYear, setSelectedYear] = useState("All");
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);
  const [allExpenses, setAllExpenses] = useState(expenses);

  useEffect(() => {
    console.log("selectedYear ", selectedYear);
    if (selectedYear === "All") {
      setExpenses(allExpenses);
      return;
    }
    let year = parseInt(selectedYear);
    let newList = allExpenses.filter((obj) => {
      return obj.date.getFullYear() === year;
    });
    setExpenses(newList);
    // const filteredData = data.filter(item => item.date.getFullYear() === targetYear);
  }, [selectedYear]);

  // const expenses = [
  //   {
  //     id: "e1",
  //     title: "Toilet Paper",
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  //   },
  //   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  //   {
  //     id: "e3",
  //     title: "Car Insurance",
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     id: "e4",
  //     title: "New Desk (Wooden)",
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ];

  // const [listData, setListData] = useState([]);

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesFilter
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      ></ExpensesFilter>
      <ExpenseRender
        expenses={expenses}
        // listData={listData}
        // setListData={setListData}
      ></ExpenseRender>
    </div>
  );
}

export default App;
