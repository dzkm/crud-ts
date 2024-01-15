import { Request, Response } from 'express';

class UserController {
    public getAll(req: Request, res: Response): void {
        // Logic to fetch users from the database
        const users = [
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Jane Smith' },
        ];

        res.json(users);
    }
}

export default UserController;
