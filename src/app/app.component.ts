import { Component } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-root",
  template: `
    <form [formGroup]="form" (ngSubmit)="submitEvent()">
      <h1>Form de ejemplo</h1>
      <form-item [form]="form"></form-item>

      <button type="submit">submit</button>

      <pre>{{ form.value | json }}</pre>
    </form>
  `
})
export class AppComponent {
  private form: FormGroup;

  data = {
    DatosPoliza: {
      IdPoliza: "1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      IdAplicacion: "aaaaaaaaaaaaaaaaaaaa",
      NumeroSuplemento: "aaaaaaaaaaaaaaaaaaaa",
      DatosMediador: {
        IdMediador: {
          CodigoInterno: "aaaaaaaaaaaaaaaaaaaa",
          CodigoDGS: "aaaaaaaaaa"
        },
        ClaseMediador: "BS",
        NombreMediador:
          "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
      },
      CodigoEntidad: {
        CodigoInterno: "aaaaaaaaaaaaaaaaaaaa",
        CodigoDGS: "aaaaaaaaaa"
      },
      DatosRamo: {
        RamoDGS: "111",
        RamoEntidad: "aaaaaaaaaaaaaaaaaaaa",
        DescripcionRamo: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        ModalidadRamo: "aaaaaaaaaaaaaaaaaaaa",
        DescripcionModalidad: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
      }
    },
    SituacionPoliza: "AN",
    ClasePoliza: "AN",
    DatosAnulacion: {
      FechaAnulacion: "2013-01-01",
      MotivoAnulacion: "MN",
      DetalleAnulacion:
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    },
    DatosSuspensiones: {
      Suspension: {
        NumeroOrden: "1",
        FechaSuspension: "2013-01-01",
        FechaReactivacion: "2013-01-01",
        Motivo: "ER"
      }
    },
    DatosPolizaReemplazada: {
      DatosPolizaReemplazada: {
        IdPoliza: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        IdAplicacion: "aaaaaaaaaaaaaaaaaaaa",
        NumeroSuplemento: "aaaaaaaaaaaaaaaaaaaa",
        DatosMediador: {
          IdMediador: {
            CodigoInterno: "aaaaaaaaaaaaaaaaaaaa",
            CodigoDGS: "aaaaaaaaaa"
          },
          ClaseMediador: "VI",
          NombreMediador:
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        },
        CodigoEntidad: {
          CodigoInterno: "aaaaaaaaaaaaaaaaaaaa",
          CodigoDGS: "aaaaaaaaaa"
        },
        DatosRamo: {
          RamoDGS: "111",
          RamoEntidad: "aaaaaaaaaaaaaaaaaaaa",
          DescripcionRamo: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          ModalidadRamo: "aaaaaaaaaaaaaaaaaaaa",
          DescripcionModalidad: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        }
      },
      Bonificacion: "aaaaaaaaaaaaaaaaaaaa"
    },
    Suplementos: {
      Suplemento: {
        NumeroOrden: "1",
        IdSuplemento: "aaaaaaaaaaaaaaaaaaaa",
        Detalle:
          "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        Fechas: {
          FechaSituacion: "2013-01-01",
          FechaEfectoInicial: "2013-01-01",
          FechaEfectoActual: "2013-01-01",
          FechaVencimiento: "2013-01-01",
          FechaFinSeguro: "2013-01-01",
          FechaSolicitud: "2013-01-01",
          FechaEmision: "2013-01-01"
        },
        Situacion: "RE",
        ClaseSuplemento: "CC",
        DescripcionClaseSuplemento:
          "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
      }
    },
    Fechas: {
      FechaSituacion: "2013-01-01",
      FechaEfectoInicial: "2013-01-01",
      FechaEfectoActual: "2013-01-01",
      FechaVencimiento: "2013-01-01",
      FechaFinSeguro: "2013-01-01",
      FechaSolicitud: "2013-01-01",
      FechaEmision: "2013-01-01"
    },
    DuracionPoliza: "RE",
    DatosRiesgos: {
      Riesgo: {
        NumeroOrden: "1",
        DescripcionRiesgo:
          "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        FechaInicio: "2013-01-01",
        RiesgoAccidentes: {
          Persona: {
            TipoIdentificacion: "EX",
            IdPersona: "aaaaaaaaaaaaaaaaaaaa",
            IdCliente: "aaaaaaaaaaaaaaaaaaaa",
            Nombre: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            Apellido1: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            Apellido2: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            Sexo: "HO",
            Domicilio: {
              NombreVia:
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              CodigoPostal: "aaaaa",
              Poblacion: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              Provincia: "1",
              ClaseVia: "aaaaaaaaaaaaaaaaaaaa",
              OtrosDatosVia: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              Pais: "aaa"
            },
            FechaNacimiento: "2013-01-01",
            Idioma: "aa",
            Profesion: {
              IdActividad: "aaaaa",
              DescripcionActividad:
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            },
            EstadoCivil: "VI"
          },
          IdAplicacion: "aaaaaaaaaaaaaaaaaaaa",
          Convenio: "aaaaaaaaaaaaaaaaaaaa"
        },
        FechaFin: "2013-01-01",
        DatosCoberturas: {
          Cobertura: {
            NumeroOrden: "1",
            IdCobertura: "aaaaaaaaaaaaaaaaaaaa",
            DescripcionCobertura:
              "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            FechaInicio: "2013-01-01",
            FechaFin: "2013-01-01",
            CapitalAsegurado: "0.0",
            DatosLimitesAsegurados: {
              Limite: {
                NumeroOrden: "1",
                ClaseLimite: "AA",
                DescripcionLimite:
                  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                LimiteMaximo: "0.0",
                LimiteMinimo: "0.0"
              }
            },
            DatosFranquicias: {
              Franquicia: {
                NumeroOrden: "1",
                ClaseFranquicia: "PE",
                DescripcionFranquicia:
                  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                ValorExacto: "0.0",
                Periodo: "CU",
                PeriodoFranquiciaUds: "0",
                Porcentaje: "0.0",
                PeriodoCarencia: "BI",
                PeriodoCarenciaUds: "0"
              }
            },
            DatosImportes: {
              PrimaTotal: "0.0",
              PrimaNeta: "0.0",
              DatosMoneda: {
                Moneda: "aaa",
                FechaCambio: "2013-01-01",
                TipoCambio: "0.0"
              },
              DatosCargos: {
                Cargo: {
                  NumeroOrden: "1",
                  ClaseCargo: "IP",
                  Importe: "0.0",
                  DescripcionCargo:
                    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                }
              },
              OtrosImportes: {
                Importe: {
                  NumeroOrden: "1",
                  ClaseOtroImporte: "RE",
                  Importe: "0.0",
                  DescripcionOtroImporte:
                    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                }
              }
            }
          }
        },
        Beneficiarios: {
          Beneficiario: {
            NumeroOrden: "1",
            Persona: {
              PersonaFisica: {
                TipoIdentificacion: "PS",
                IdPersona: "aaaaaaaaaaaaaaaaaaaa",
                IdCliente: "aaaaaaaaaaaaaaaaaaaa",
                Nombre: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                Apellido1: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                Apellido2: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                Sexo: "MU",
                Domicilio: {
                  NombreVia:
                    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                  CodigoPostal: "aaaaa",
                  Poblacion: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                  Provincia: "1",
                  ClaseVia: "aaaaaaaaaaaaaaaaaaaa",
                  OtrosDatosVia: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                  Pais: "aaa"
                },
                FechaNacimiento: "2013-01-01",
                Idioma: "aa",
                Profesion: {
                  IdActividad: "aaaaa",
                  DescripcionActividad:
                    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                },
                EstadoCivil: "DI"
              }
            },
            Orden: "0",
            DescripcionBeneficiario:
              "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          }
        },
        OtrasFiguras: {
          Figura: {
            NumeroOrden: "1",
            DatosFigura: {
              PersonaFisica: {
                TipoIdentificacion: "NI",
                IdPersona: "aaaaaaaaaaaaaaaaaaaa",
                IdCliente: "aaaaaaaaaaaaaaaaaaaa",
                Nombre: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                Apellido1: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                Apellido2: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                Sexo: "MU",
                Domicilio: {
                  NombreVia:
                    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                  CodigoPostal: "aaaaa",
                  Poblacion: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                  Provincia: "1",
                  ClaseVia: "aaaaaaaaaaaaaaaaaaaa",
                  OtrosDatosVia: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                  Pais: "aaa"
                },
                FechaNacimiento: "2013-01-01",
                Idioma: "aa",
                Profesion: {
                  IdActividad: "aaaaa",
                  DescripcionActividad:
                    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                },
                EstadoCivil: "CA"
              }
            },
            ClaseFigura: "CO"
          }
        },
        OtrosDatos: {
          Dato: {
            NumeroOrden: "1",
            IdDato: "aaaaaaaaaaaaaaaaaaaa",
            DescripcionDato:
              "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            IdSubdato: "aaaaaaaaaaaaaaaaaaaa",
            ValorSubdato:
              "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          }
        }
      }
    },
    DatosImportes: {
      Importes: {
        PrimaTotal: "0.0",
        PrimaNeta: "0.0",
        DatosMoneda: {
          Moneda: "aaa",
          FechaCambio: "2013-01-01",
          TipoCambio: "0.0"
        },
        DatosCargos: {
          Cargo: {
            NumeroOrden: "1",
            ClaseCargo: "NI",
            Importe: "0.0",
            DescripcionCargo:
              "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          }
        },
        OtrosImportes: {
          Importe: {
            NumeroOrden: "1",
            ClaseOtroImporte: "MA",
            Importe: "0.0",
            DescripcionOtroImporte:
              "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          }
        }
      },
      ImportesDEC: {
        PrimaTotalAnualizada: "0.0",
        PrimaNetaAnualizada: "0.0",
        ComisionAnualizada: "0.0",
        CapitalAseguradoAgregado: "0.0"
      }
    },
    DatosComisiones: {
      Comision: {
        NumeroOrden: "2",
        ClaseComision: "ME",
        ComisionBruta: "0.0",
        ComisionLiquida: "0.0"
      }
    },
    FraccionPago: "CU",
    GestionCobro: {
      ClaseGestion: "ME",
      DatosFormaPago: {
        ClaseFormaPago: "CH",
        DatosCuentaCorriente: {
          Entidad: "0000",
          Oficina: "0000",
          DC: "00",
          Cuenta: "0000000000",
          IBAN: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          BIC: "aaaaaaaaaaa",
          Titular: {
            PersonaFisica: {
              TipoIdentificacion: "OT",
              IdPersona: "aaaaaaaaaaaaaaaaaaaa",
              IdCliente: "aaaaaaaaaaaaaaaaaaaa",
              Nombre: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              Apellido1: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              Apellido2: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              Sexo: "MU",
              Domicilio: {
                NombreVia:
                  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                CodigoPostal: "aaaaa",
                Poblacion: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                Provincia: "1",
                ClaseVia: "aaaaaaaaaaaaaaaaaaaa",
                OtrosDatosVia: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                Pais: "aaa"
              },
              FechaNacimiento: "2013-01-01",
              Idioma: "aa",
              Profesion: {
                IdActividad: "aaaaa",
                DescripcionActividad:
                  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
              },
              EstadoCivil: "SE"
            }
          }
        }
      }
    },
    Tomador: {
      PersonaFisica: {
        TipoIdentificacion: "NI",
        IdPersona: "aaaaaaaaaaaaaaaaaaaa",
        IdCliente: "aaaaaaaaaaaaaaaaaaaa",
        Nombre: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        Apellido1: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        Apellido2: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        Sexo: "ND",
        Domicilio: {
          NombreVia:
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          CodigoPostal: "aaaaa",
          Poblacion: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          Provincia: "1",
          ClaseVia: "aaaaaaaaaaaaaaaaaaaa",
          OtrosDatosVia: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          Pais: "aaa"
        },
        FechaNacimiento: "2013-01-01",
        Idioma: "aa",
        Profesion: {
          IdActividad: "aaaaa",
          DescripcionActividad:
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        },
        EstadoCivil: "VI"
      }
    },
    Asegurado: {
      PersonaFisica: {
        TipoIdentificacion: "CI",
        IdPersona: "aaaaaaaaaaaaaaaaaaaa",
        IdCliente: "aaaaaaaaaaaaaaaaaaaa",
        Nombre: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        Apellido1: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        Apellido2: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        Sexo: "MU",
        Domicilio: {
          NombreVia:
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          CodigoPostal: "aaaaa",
          Poblacion: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          Provincia: "1",
          ClaseVia: "aaaaaaaaaaaaaaaaaaaa",
          OtrosDatosVia: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          Pais: "aaa"
        },
        FechaNacimiento: "2013-01-01",
        Idioma: "aa",
        Profesion: {
          IdActividad: "aaaaa",
          DescripcionActividad:
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        },
        EstadoCivil: "DI"
      }
    },
    OrigenesContratacion: {
      OrigenContratacion: {
        NumeroOrden: "0",
        ClaseContratacion: "EN",
        DescripcionClase:
          "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        CodigoCentro: "aaaaaaaaaaaaaaaaaaaa",
        DescripcionCentro:
          "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
      }
    },
    DatosRegularizacion: {
      PolizaRegularizable: "1",
      FechaEfecto: "2013-01-01",
      FechaVencimiento: "2013-01-01",
      Periodo: "ME",
      ClaseRegularizacion: "CO",
      ConceptosRegularizacion: {
        Concepto: {
          ConceptoRegularizacion: "0",
          ValorDeclarado: "0",
          Tasa: "0.0",
          ClaseTasa: "TM",
          PrimaCalculada: "0.0",
          PrimaMinima: "0.0",
          PrimaMaxima: "0.0",
          PrimaDeposito: "0.0"
        }
      }
    },
    OtrosDatos: {
      Dato: {
        NumeroOrden: "2",
        IdDato: "aaaaaaaaaaaaaaaaaaaa",
        DescripcionDato:
          "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        IdSubdato: "aaaaaaaaaaaaaaaaaaaa",
        ValorSubdato:
          "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
      }
    },
    DatosRecibos: {
      DatosRecibo: {
        IdRecibo: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        SituacionRecibo: "CO",
        ClaseRecibo: "EX",
        Fechas: {
          FechaSituacion: "2013-01-01",
          FechaEfectoInicial: "2013-01-01",
          FechaEfectoActual: "2013-01-01",
          FechaVencimiento: "2013-01-01",
          FechaFinSeguro: "2013-01-01",
          FechaSolicitud: "2013-01-01",
          FechaEmision: "2013-01-01"
        },
        GestionCobro: {
          ClaseGestion: "CO",
          DatosFormaPago: {
            ClaseFormaPago: "IN",
            DatosCuentaCorriente: {
              Entidad: "0000",
              Oficina: "0000",
              DC: "00",
              Cuenta: "0000000000",
              IBAN: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              BIC: "aaaaaaaaaaa",
              Titular: {
                PersonaFisica: {
                  TipoIdentificacion: "CI",
                  IdPersona: "aaaaaaaaaaaaaaaaaaaa",
                  IdCliente: "aaaaaaaaaaaaaaaaaaaa",
                  Nombre: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                  Apellido1: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                  Apellido2: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                  Sexo: "MU",
                  Domicilio: {
                    NombreVia:
                      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                    CodigoPostal: "aaaaa",
                    Poblacion: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                    Provincia: "1",
                    ClaseVia: "aaaaaaaaaaaaaaaaaaaa",
                    OtrosDatosVia: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                    Pais: "aaa"
                  },
                  FechaNacimiento: "2013-01-01",
                  Idioma: "aa",
                  Profesion: {
                    IdActividad: "aaaaa",
                    DescripcionActividad:
                      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                  },
                  EstadoCivil: "SO"
                }
              }
            }
          }
        },
        DatosImportes: {
          Importes: {
            PrimaTotal: "0.0",
            PrimaNeta: "0.0",
            DatosMoneda: {
              Moneda: "aaa",
              FechaCambio: "2013-01-01",
              TipoCambio: "0.0"
            },
            DatosCargos: {
              Cargo: {
                NumeroOrden: "0",
                ClaseCargo: "CO",
                Importe: "0.0",
                DescripcionCargo:
                  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
              }
            },
            OtrosImportes: {
              Importe: {
                NumeroOrden: "0",
                ClaseOtroImporte: "RE",
                Importe: "0.0",
                DescripcionOtroImporte:
                  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
              }
            }
          },
          ImportesDEC: {
            PrimaTotalAnualizada: "0.0",
            PrimaNetaAnualizada: "0.0",
            ComisionAnualizada: "0.0",
            CapitalAseguradoAgregado: "0.0"
          }
        },
        DatosComisiones: {
          Comision: {
            NumeroOrden: "0",
            ClaseComision: "ME",
            ComisionBruta: "0.0",
            ComisionLiquida: "0.0"
          }
        },
        MovimientosRecibo: {
          Movimiento: {
            NumeroOrden: "0",
            ClaseMovimiento: "EM",
            FechaMovimiento: "2013-01-01",
            Anulacion: {
              MotivoAnulacion: "CA",
              DescripcionMotivo:
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              ReferenciaAnulacion: "aaaaaaaaaaaaaaaaaaaa"
            }
          }
        },
        IdRemesa: "aaaaaaaaaaaaaaaaaaaa",
        OtrosDatos: {
          Dato: {
            NumeroOrden: "0",
            IdDato: "aaaaaaaaaaaaaaaaaaaa",
            DescripcionDato:
              "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            IdSubdato: "aaaaaaaaaaaaaaaaaaaa",
            ValorSubdato:
              "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          }
        }
      }
    }
  };
  dataForm= {};

  constructor(private fb: FormBuilder) {
    this.createForm(this.data, this.dataForm);

    this.form = this.fb.group(this.dataForm);
  }
  submitEvent() {
    console.log(this.form.value);
  }
  createForm(data, dataForm) {
    for (let key of Object.keys(data)) {
      if (data[key] instanceof Object) {
        if (dataForm instanceof FormGroup) {
          dataForm.addControl([key][0], this.fb.group({}));
          this.createForm(data[key], dataForm.get(key));
        } else {
          dataForm[key] = this.fb.group({});
          this.createForm(data[key], dataForm[key]);
        }
      } else {
        if (dataForm instanceof FormGroup) {
          dataForm.addControl(
            [key][0],
            new FormControl(data[key], Validators.required)
          );
        } else {
          dataForm[key] = [data[key], Validators.required];
        }
      }
    }
  }
}
