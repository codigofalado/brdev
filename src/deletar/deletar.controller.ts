import { All, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { DeletarService } from './deletar.service';

@Controller('deletar')
export class DeletarController {
    constructor(private deletarService: DeletarService){}
    @Get()
    home(){
        return "Página Principal do Módulo DELETAR! 💣";
    }
    @Put()
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
}
