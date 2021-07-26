"""empty message

Revision ID: 49c9902de1aa
Revises: 
Create Date: 2021-07-26 20:41:40.698990

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '49c9902de1aa'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('bikers',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('bikername', sa.String(length=80), nullable=False),
    sa.Column('firstname', sa.String(length=80), nullable=True),
    sa.Column('lastname', sa.String(length=80), nullable=True),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('bikername'),
    sa.UniqueConstraint('email')
    )
    op.create_table('talleres',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('tallername', sa.String(length=80), nullable=False),
    sa.Column('email', sa.String(length=80), nullable=True),
    sa.Column('address', sa.String(), nullable=False),
    sa.Column('comment_text', sa.String(length=300), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('tallername')
    )
    op.create_table('helpers',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('biker_id', sa.Integer(), nullable=True),
    sa.Column('taller_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['biker_id'], ['bikers.id'], ),
    sa.ForeignKeyConstraint(['taller_id'], ['talleres.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('posts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('biker_id', sa.Integer(), nullable=True),
    sa.Column('taller_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['biker_id'], ['bikers.id'], ),
    sa.ForeignKeyConstraint(['taller_id'], ['talleres.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('comment_text', sa.String(length=200), nullable=True),
    sa.Column('author_id', sa.Integer(), nullable=True),
    sa.Column('blog_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['author_id'], ['bikers.id'], ),
    sa.ForeignKeyConstraint(['blog_id'], ['posts.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('comments')
    op.drop_table('posts')
    op.drop_table('helpers')
    op.drop_table('talleres')
    op.drop_table('bikers')
    # ### end Alembic commands ###
