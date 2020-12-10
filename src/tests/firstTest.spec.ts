import { User } from './../models/User';


test('it should be ok', () => {
    const user = new User();
    user.nome = 'Honatel';

    expect(user.nome).toEqual('Honatel');
});