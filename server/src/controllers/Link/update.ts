import Services from '../../services';

import type { ILinkForUpdateDTO, IUser } from '@linx/shared';
import type { Reply, Request } from '../../types';

export default async function update(request: Request, reply: Reply) {
	const data = request.body as ILinkForUpdateDTO;
	const { id } = request.params as { id: string };
	const user = request.user as IUser;

	const link = await Services.link.update(user.id, { id, ...data });
	return reply.code(200).send({
		success: true,
		message: 'Link modified successfully',
		data: { link: link },
	});
}
