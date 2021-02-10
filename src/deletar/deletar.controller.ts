import { Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { TestParent } from '@prisma/client';
import { DeletarService } from './deletar.service';

@Controller('deletar')
export class DeletarController {
    constructor(private deletarService: DeletarService){}
    @Get()
    home(){
        return "Página Principal do Módulo DELETAR! 💣";
    }
    @Get('teste')
    fernando(): string{
        return this.deletarService.getTest();
    }
    @Get('teste/:nome/:cor?')
    testeParrudo(@Param('nome') nome: string, @Param('cor') cor: string = "peru"){
        return `<h1 style="color: ${cor};">Prazer em conhecer, ${nome.toUpperCase()}!</h1>`;
    }

    @Post('eita')
    qualquercoisa(){
        return "Qualquer Coisa! 🐗";
    }
    @Get('test-parent')
    async getTestParent(): Promise<TestParent[]>{
        return this.deletarService.parents({});
    }
    @Get('test-parent/:id')
    async getTestParentById(@Param('id') id: string): Promise<TestParent>{
        const testParent = await this.deletarService.parent({
            id: Number.parseInt(id)
        });
        if(!testParent){
            throw new NotFoundException();
        }
        return testParent;
    }
    
}
