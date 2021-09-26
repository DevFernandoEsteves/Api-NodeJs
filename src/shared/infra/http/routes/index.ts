import { Router } from "express"
import { authenciateRoutes } from "@shared/infra/http/routes/authenticate.routes";

import { categoriesRoutes } from "@shared/infra/http/routes/categories.routes";
import { specificationsRoutes } from "@shared/infra/http/routes/specification.routes";
import { usersRoutes } from "@shared/infra/http/routes/users.routes";

const router = Router()

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use("/users", usersRoutes);
router.use(authenciateRoutes)

export { router }