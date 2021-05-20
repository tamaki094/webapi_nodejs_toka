SELECT * FROM
(
    SELECT 
        ROW_NUMBER() OVER (ORDER BY Nombre) AS [Posicion]
        ,[IdPersonaFisica]
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
) AS [Tb_PersonasFisicas]
WHERE Posicion >= 1 and Posicion<= 2;