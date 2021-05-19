SELECT 
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
FROM 
	Tb_PersonasFisicas
WHERE
    [IdPersonaFisica] = @IdPersonaFisica;