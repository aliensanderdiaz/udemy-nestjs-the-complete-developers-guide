import { Controller, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
    @Get('/products')
    getProducts() {
        return {
            data: ['Product List']
        };
    }

    @Get('/categories')
    getCategories() {
        return {
            data: ['Categories List']
        };
    }
}
