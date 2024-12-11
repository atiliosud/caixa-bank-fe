import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AccountDetails from "../../src/components/AccountDetails";
import { GlobalStateProvider } from "../../src/contexts/GlobalState";

const mockAccounts = {
  1: { name: "Savings Account", balance: "$10,000", number: "123456789" },
  2: { name: "Checking Account", balance: "$5,000", number: "987654321" },
};

jest.mock("../../src/contexts/GlobalState", () => ({
  useGlobalState: () => ({
    accounts: mockAccounts,
  }),
}));

describe("AccountDetails Component", () => {
  test("renders account details correctly", () => {
    render(
      <GlobalStateProvider>
        <AccountDetails accountId="1" />
      </GlobalStateProvider>
    );

    expect(screen.getByText(/Savings Account/i)).toBeInTheDocument();
    expect(screen.getByText(/\$10,000/i)).toBeInTheDocument();
    expect(screen.getByText(/123456789/i)).toBeInTheDocument();
  });

  test('displays "Account not found" for invalid account ID', () => {
    render(
      <GlobalStateProvider>
        <AccountDetails accountId="999" />
      </GlobalStateProvider>
    );

    expect(screen.getByText(/Account not found/i)).toBeInTheDocument();
  });
});
