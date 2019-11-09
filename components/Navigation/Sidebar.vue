<template>
  <div class="sidebar sidebar-light bg-light">
    <ul class="list-unstyled">
      <li>
        <router-link to="/" class="nav-link">Moji Dokumenti</router-link>
      </li>
      <li>
        <router-link to="/about" class="nav-link">Korisničke postavke</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  mounted() {}
}
</script>

<style>
.sidebar {
  min-width: 230px;
  max-width: 230px;
  min-height: calc(100vh - 49px);
  transition: all 0.3s;
}
.sidebar ul li a {
  display: block;
  padding: 0.75rem 1rem;
  text-decoration: none;
}
.sidebar ul ul a {
  padding-left: 2.5rem;
}
.sidebar [data-toggle='collapse'] {
  position: absolute;
}
.sidebar [data-toggle='collapse']:before {
  content: '\f0d7';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  position: absolute;
  right: 1rem;
}
.sidebar [aria-expanded='true']:before {
  content: '\f0d8';
}
.sidebar.toggled {
  margin-left: -230px;
}

.sidebar-dark ul li a {
  color: rgba(255, 255, 255, 0.75);
}
.sidebar-dark ul ul a {
  background: rgba(0, 0, 0, 0.15);
}
.sidebar-dark ul li a:hover,
.sidebar-dark ul a.active {
  color: rgba(255, 255, 255, 1);
  background: rgba(0, 0, 0, 0.15);
}
.sidebar-dark [aria-expanded='true'] {
  background: rgba(0, 0, 0, 0.15);
}
.sidebar-light ul li a {
  color: rgba(0, 0, 0, 0.75);
}
.sidebar-light ul ul a {
  background: rgba(0, 0, 0, 0.05);
}
.sidebar-light ul li a:hover,
.sidebar-light ul a.active {
  color: rgba(0, 0, 0, 1);
  background: rgba(0, 0, 0, 0.05);
}
.sidebar-light [aria-expanded='true'] {
  background: rgba(0, 0, 0, 0.05);
}
</style>