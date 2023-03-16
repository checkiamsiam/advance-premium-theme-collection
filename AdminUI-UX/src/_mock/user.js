import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  name: faker.name.findName(),
  company: faker.company.companyName(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  role: sample([
    '(+91) 9876543210',
    '(+91) 9876543666',
    '(+91) 9899876543',
    '(+91) 9999999999',
    '(+91) 8877665544',
    '(+91) 8765432100',
    '(+91) 9988776655',
    '(+91) 7878878788',
    '(+91) 9000668655',
    '(+91) 9876590990',
  ]),
}));

export default users;
