INSERT INTO Tb_PersonasFisicas(
	[IdPersonaFisica]
	, [FechaRegistro]
	, [FechaActualizacion]
	, [Nombre]
	, [ApellidoPaterno]
	, [ApellidoMaterno]
	, [RFC]
	, [FechaNacimiento]
	, [UsuarioAgrega]
	, [Activo]
)
VALUES(
    @IdPersonaFisica
	, @FechaRegistro
	, @FechaActualizacion
	, @Nombre
	, @ApellidoPaterno
	, @ApellidoMaterno
	, @RFC
	, @FechaNacimiento
	, @UsuarioAgrega
	, @Activo
)

SELECT SCOPE_IDENTITY AS IdPersonaFisica;