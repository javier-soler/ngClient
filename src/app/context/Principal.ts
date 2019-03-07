export class Principal {
    constructor(id: number,
        tenantId: number,
        userName: string,
        firstName: string,
        lastName: string,
        email: string,
        profile: {
            id: number,
            shortName: string,
            authorities: [{ name: string }]
        }
    ) { }
}
