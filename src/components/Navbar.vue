<template>
	<b-navbar toggleable="md" type="light" variant="light" class="mb-4">
		<b-container>
			<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
			<b-navbar-brand to="/">MWLII</b-navbar-brand>
			<b-collapse is-nav id="nav_collapse">
				<b-navbar-nav>
					<b-nav-item to="/">Startups</b-nav-item>
					<b-nav-item to="/">Cities</b-nav-item>
					<b-nav-item to="/">People</b-nav-item>
				</b-navbar-nav>
				<b-navbar-nav class="ml-auto">
					<!-- <b-nav-form>
						<b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
						<b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
					</b-nav-form> -->
					<b-nav-item-dropdown right>
						<template slot="button-content">
							User
						</template>
						<b-dropdown-item to="/">Profile</b-dropdown-item>
						<b-dropdown-item to="/">Signout</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-container>
	</b-navbar>
</template>
