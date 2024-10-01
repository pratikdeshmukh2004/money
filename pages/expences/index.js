import React from "react";

const Expences = () => {

    const transactions = [
        {
          id: 1,
          amount: "120",
          paidTo: "Rushi Pahadi shop",
          description: "Snacks and water bottle for rushi pahadi treck",
          date: "1-Sep-2024",
          mode: "Online",
          category: "Snacks",
        },
        {
          id: 2,
          amount: "440",
          paidTo: "Mahavitran",
          description: "Electricity Bill",
          date: "2-Sep-2024",
          mode: "Online",
          category: "Bills",
        },
        {
          id: 3,
          amount: "1234",
          paidTo: "JIoBharat",
          description: "Mobile recharge of father",
          date: "2-Sep-2024",
          mode: "Online",
          category: "Bills",
        },
        {
          id: 4,
          amount: "130",
          paidTo: "Bikaner Gobarwahi",
          description: "Had PawBhaji with Pratik",
          date: "4-Sep-2024",
          mode: "Online",
          category: "Snacks",
        },
      ];
      
      
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full">
        {/* Table Header */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-gray-600">Amount</th>
                <th className="px-4 py-2 text-left text-gray-600">Paid to</th>
                <th className="px-4 py-2 text-left text-gray-600">Description</th>
                <th className="px-4 py-2 text-left text-gray-600">Date</th>
                <th className="px-4 py-2 text-left text-gray-600">Mode</th>
                <th className="px-4 py-2 text-left text-gray-600">Category</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b">
                  <td className="px-4 py-2">{transaction.amount}</td>
                  <td className="px-4 py-2">{transaction.paidTo}</td>
                  <td className="px-4 py-2">{transaction.description}</td>
                  <td className="px-4 py-2">{transaction.date}</td>
                  <td className="px-4 py-2">{transaction.mode}</td>
                  <td className="px-4 py-2">{transaction.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

 
  );
};

export default Expences;
