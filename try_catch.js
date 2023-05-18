function Try_to_Catch() {
  let a = 3;
  try {
    console.log(a);
  } catch {
    console.log("let must be declared");
  } finally {
    console.log("cannot be divided by zero");
  }
}
Try_to_Catch();
