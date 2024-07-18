import type { IReply } from '@linx/shared';
import type {
  DoneFuncWithErrOrRes,
  FastifyInstance,
  RegisterOptions,
} from 'fastify';
import me from '../../controllers/User/me';
import checkJwt from '../../middlewares/checkJwt';

export default function user(
  fastify: FastifyInstance,
  _: RegisterOptions,
  done: DoneFuncWithErrOrRes,
) {
  fastify.register(checkJwt);

  fastify.get<{ Reply: IReply }>('/me', me);

  done();
}
