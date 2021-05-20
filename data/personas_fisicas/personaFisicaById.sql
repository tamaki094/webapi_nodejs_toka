SELECT 
	[IdPersonaFisica]
	, [FechaRegistro]
	 , ISNULL(FechaActualizacion, FechaRegistro) AS [FechaActualizacion]
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