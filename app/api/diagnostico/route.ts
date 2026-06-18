import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "contato.aydaxis@outlook.com",
      subject: "Novo Diagnóstico Estratégico - AYDAXYS",
      html: `
        <h2>Novo Lead Recebido</h2>

        <p><strong>Nome:</strong> ${data.nome}</p>

        <p><strong>Empresa:</strong> ${data.empresa}</p>

        <p><strong>E-mail:</strong> ${data.email}</p>

        <p><strong>Telefone:</strong> ${data.telefone}</p>

        <p><strong>Segmento:</strong> ${data.segmento}</p>

        <p><strong>Faturamento:</strong> ${data.faturamento}</p>

        <p><strong>Principal Desafio:</strong></p>

        <p>${data.desafio}</p>
      `,
    });

    return Response.json({
      success: true,
      message: "Diagnóstico enviado com sucesso.",
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Erro ao enviar diagnóstico.",
      },
      {
        status: 500,
      }
    );
  }
}
