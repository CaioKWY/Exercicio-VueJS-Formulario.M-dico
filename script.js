const vm = new Vue({
  el: "#app",
  data: {
    sexoP: "",
    nascP: "",
    nomeP: "",
    planoP: "",
    dataP: "",
    pacientes: [],
  },
  methods: {
    cadastrar() {
      this.pacientes.push({
        nome: this.nomeP,
        sexo: this.sexoP,
        nascimento: this.nascP,
        plano: this.planoP,
      });

      this.nomeP = "";
      this.sexoP = "";
      this.nascP = "";
      this.planoP = "";
    },
  },
  computed: {
    lastP() {
      let chave = this.pacientes.length - 1;
      let txt = "";

      txt += "Paciente: " + this.pacientes[chave].nome;

      txt += ", " + this.pacientes[chave].nascimento;
      txt += ", " + this.pacientes[chave].sexo;

      return txt;
    },

    planoB() {
      return this.pacientes.filter((x1) => x1.plano == "Basico");
    },

    planoPlus() {
      return this.pacientes.filter((xyt) => xyt.plano == "Plus");
    },
    planoC() {
      return this.pacientes.filter((x1) => x1.plano == "Completo");
    },
  },
});
