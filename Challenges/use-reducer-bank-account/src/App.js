/*
INSTRUCTIONS / CONSIDERATIONS:

1. Let's implement a simple bank account! It's similar to the example that I used as an analogy to explain how useReducer works, but it's simplified (we're not using account numbers here)

2. Use a reducer to model the following state transitions: openAccount, deposit, withdraw, requestLoan, payLoan, closeAccount. Use the `initialState` below to get started.

3. All operations (expect for opening account) can only be performed if isActive is true. If it's not, just return the original state object. You can check this right at the beginning of the reducer

4. When the account is opened, isActive is set to true. There is also a minimum deposit amount of 500 to open an account (which means that the balance will start at 500)

5. Customer can only request a loan if there is no loan yet. If that condition is met, the requested amount will be registered in the 'loan' state, and it will be added to the balance. If the condition is not met, just return the current state

6. When the customer pays the loan, the opposite happens: the money is taken from the balance, and the 'loan' will get back to 0. This can lead to negative balances, but that's no problem, because the customer can't close their account now (see next point)

7. Customer can only close an account if there is no loan, AND if the balance is zero. If this condition is not met, just return the state. If the condition is met, the account is deactivated and all money is withdrawn. The account basically gets back to the initial state
*/

import { useReducer } from 'react';
const OPENING_BALANCE = 500;

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'openAccount':
      return { ...initialState, balance: OPENING_BALANCE, isActive: true };

    case 'deposit150':
      return { ...state, balance: state.balance + 150 };

    case 'withdraw50':
      return { ...state, balance: state.balance - 50 };

    case 'requestLoanOf5k':
      return {
        ...state,
        balance: state.balance + 5000,
        loan: state.loan + 5000,
      };

    case 'payLoan':
      return { ...state, balance: state.balance - 5000, loan: 0 };

    case 'closeAccount':
      return initialState;

    default:
      throw new Error('Unknown action');
  }
}

export default function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className='App'>
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <Button
        callback={() => dispatch({ type: 'openAccount' })}
        disabled={isActive}
      >
        Open account
      </Button>

      <Button
        callback={() => dispatch({ type: 'deposit150' })}
        disabled={!isActive}
      >
        Deposit 150
      </Button>

      <Button
        callback={() => dispatch({ type: 'withdraw50' })}
        disabled={!isActive || balance < 50}
      >
        Withdraw 50
      </Button>

      <Button
        callback={() => dispatch({ type: 'requestLoanOf5k' })}
        disabled={!isActive || loan > 0}
      >
        Request a loan of 5000
      </Button>

      <Button
        callback={() => dispatch({ type: 'payLoan' })}
        disabled={!isActive || loan > balance || loan === 0}
      >
        Pay loan
      </Button>

      <Button
        callback={() => dispatch({ type: 'closeAccount' })}
        disabled={!isActive || balance !== 0 || loan !== 0}
      >
        Close account
      </Button>
    </div>
  );
}

function Button({ children, callback, disabled }) {
  return (
    <p>
      <button onClick={callback} disabled={disabled}>
        {children}
      </button>
    </p>
  );
}
