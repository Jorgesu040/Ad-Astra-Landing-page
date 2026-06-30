const navItems = [
  { label: "Home", to: "/" },
  {
    label: "Proyectos",
    children: [
        { label: "Sigma", to: "/projects/sigma" },
        { label: "Rocket A4", to: "/projects/rocket-a4" },
        { label: "Jet Engine", to: "/projects/jet-engine" },
        { label: "Todos los proyectos", to: "/projects", hasDividerBefore: true },
    ],
  },
  { label: "Sponsors", to: "/sponsors" },
  { label: "Team", to: "/team" },
];

export default navItems;