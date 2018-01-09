import { Sequelize } from 'sequelize';
const Op = Sequelize.Op;

export const operatorsAliases = {
  // = 3
  $eq: Op.eq,
  // != 20
  $ne: Op.ne,
  // >= 6
  $gte: Op.gte,
  // > 6
  $gt: Op.gt,
  // <= 10
  $lte: Op.lte,
  // < 10
  $lt: Op.lt,
  // IS NOT TRUE
  $not: Op.not,
  // IN [1, 2]
  $in: Op.in,
  // NOT IN [1, 2]
  $notIn: Op.notIn,
  //
  $is: Op.is,
  // LIKE '%hat'
  $like: Op.like,
  // NOT LIKE '%hat'
  $notLike: Op.notLike,
  // ILIKE '%hat' (case insensitive) (PG only)
  $iLike: Op.iLike,
  // NOT ILIKE '%hat'  (PG only)
  $notILike: Op.notILike,
  // REGEXP/~ '^[h|a|t]' (MySQL/PG only)
  $regexp: Op.regexp,
  // NOT REGEXP/!~ '^[h|a|t]' (MySQL/PG only)
  $notRegexp: Op.notRegexp,
  // ~* '^[h|a|t]' (PG only)
  $iRegexp: Op.iRegexp,
  // !~* '^[h|a|t]' (PG only)
  $notIRegexp: Op.notIRegexp,
  // BETWEEN 6 AND 10
  $between: Op.between,
  // NOT BETWEEN 11 AND 15
  $notBetween: Op.notBetween,
  //
  $overlap: Op.overlap,
  //
  $contains: Op.contains,
  //
  $contained: Op.contained,
  //
  $adjacent: Op.adjacent,
  //
  $strictLeft: Op.strictLeft,
  //
  $strictRight: Op.strictRight,
  //
  $noExtendRight: Op.noExtendRight,
  //
  $noExtendLeft: Op.noExtendLeft,
  // AND (a = 5)
  $and: Op.and,
  // (a = 5 OR a = 6)
  $or: Op.or,
  // ANY ARRAY[2, 3]::INTEGER (PG only)
  $any: Op.any,
  //
  $all: Op.all,
  //
  $values: Op.values,
  // = "user"."organization_id", with dialect specific column identifiers, PG in this example
  $col: Op.col
};
