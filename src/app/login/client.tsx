'use client';

export function LoginButton() {
  function clickFunction() {
    console.log("Click!");
  }

  return <button onClick={clickFunction}>Login</button>;
}