<div class="container">
<h2>Registration</h2>
<form action="/action_page.php">

<div class="form-group">
    <label for="login">Login:</label> <span class="error_req"> * </span> <span class="sp"  id =""> </span>
    <input type="text" class="form-control" id="login">
  </div>
  
  <div class="form-group">
    <label for="name">Name:</label><span class="error_req"> * </span> <span class="sp"  id =""> </span>
    <input type="text" class="form-control" id="name">
  </div>
  
  <div class="form-group">
    <label for="email">Email address:</label><span class="error_req"> * </span> <span class="sp"  id =""> </span>
    <input type="email" class="form-control" id="email">
  </div>
  
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" id="pwd">
  </div>
  
  <div class="form-group">
    <label for="pwd2">Confirm Password:</label>
    <input type="password" class="form-control" id="pwd2">
  </div>
  
  <div class="checkbox">
    <label><input type="checkbox"> Remember me</label>
  </div>
  
  <button type="submit" class="btn btn-primary" id="submitBTN">Submit</button>
</form>
</div>