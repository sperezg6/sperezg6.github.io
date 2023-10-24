Vue.component('line-chart', {
  extends: VueChartJs.Line,
  props: ['chartData', 'label'],
  mounted() {
    this.renderChart({
      labels: this.chartData.labels,
      datasets: [{
        label: this.label,
        backgroundColor: '#f87979',
        data: this.chartData.data
      }]
    }, {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Monto de Pagos Recibidos por Día'
      }
    })
  }
})



  
  // Componente de gráfica de pastel
  Vue.component('pie-chart', {
    extends: VueChartJs.Pie,
    props: ['chartData', 'label'],
    mounted() {
      this.renderChart({
        labels: this.chartData.labels,
        datasets: [{
          label: this.label,
          backgroundColor: ['#c4c1ec', '#043263 ', '#ec0000', '#d3d3d3'],
          data: this.chartData.data
        }]
      }, {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: this.label // Usamos el prop 'label' como título
        }
      })
    }
})

  
  // Componente de gráfica de barras
  Vue.component('bar-chart', {
    extends: VueChartJs.Bar,
    props: ['chartData', 'label'],
    mounted() {
      this.renderChart({
        labels: this.chartData.labels,
        datasets: [{
          label: this.label,
          backgroundColor: ['#f87979', '#6fcf97', '#56ccf2'],
          data: this.chartData.data
        }]
      }, {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: '% de Cobranza por Cosecha'
        }
      })
    }
})


// ... [componentes de gráfica previamente definidos]// ... [componentes de gráfica previamente definidos]

// ... [componentes de gráfica previamente definidos]

new Vue({
  el: '#app',
  data: {
    startDate: new Date().toISOString().slice(0, 10), // Fecha actual
    endDate: new Date().toISOString().slice(0, 10), // Fecha actual
    totalAlumnos: 0,
    totalPagos: 0,
    dataPagosDiarios: {
      labels: Array.from({ length: 30 }, (_, i) => `Día ${i + 1}`),
      data: []
    },
    dataMetodosPago: {
      labels: ['Stripe', 'BBVA', 'Santander', 'Cajas'],
      data: []
    },
    dataTiposPago: {
      labels: ['Tarjeta de crédito', 'Débito', 'Efectivo', 'Transferencia'],
      data: []
    },
    dataPorCosecha: {
      labels: ['202308', '202309', '202310'],
      data: [] // Porcentaje de cobranza
    }
  },
  created() {
    this.generateRandomData();
  },
  methods: {
    randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    generateRandomData() {
      this.totalAlumnos = this.randomNumber(100, 500);
      this.totalPagos = this.randomNumber(200, 1000);
      this.dataPagosDiarios.data = Array.from({ length: 30 }, () => this.randomNumber(500, 5000));
      this.dataMetodosPago.data = [
        this.randomNumber(50, 200),
        this.randomNumber(50, 200),
        this.randomNumber(50, 200),
        this.randomNumber(50, 200)
      ];
      this.dataTiposPago.data = [
        this.randomNumber(50, 200),
        this.randomNumber(50, 200),
        this.randomNumber(50, 200),
        this.randomNumber(50, 200)
      ];
      this.dataPorCosecha.data = [
        this.randomNumber(60, 100),
        this.randomNumber(60, 100),
        this.randomNumber(60, 100)
      ];
    },
    updateData() {
      // Aquí puedes agregar la lógica para filtrar los datos basados en el rango de fechas seleccionado.
      // Por ahora, simplemente regeneraremos los datos aleatorios para simular un cambio.
      this.generateRandomData();
    }
  }
})
