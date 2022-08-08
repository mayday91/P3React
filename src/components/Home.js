const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<h2>Home Page</h2>
			{/* <div class="search-wrapper">
  <label for="search">Search Tasks </label><br/>
  <input type="search" id="search"></input>
</div>
<div class="task-search-cards">
  <div class="search-card">
    <div class="header">Task: </div>
  </div>
</div> */}

<form className="center">
<input type="text" id="search-bar" onkeyup="sendData(this)"></input>
<input type="submit"></input>
</form>
<section id="searchResults">
</section>
		</>
	)
}

export default Home
